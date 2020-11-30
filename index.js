const aws = require('aws-sdk');
aws.config.update({region: 'eu-west-1'});
const s3 = new aws.S3();

exports.handler = async function(event, context) {
  const params = {
    Bucket: process.env.S3_BUCKET_ZIP,
    Key: 'Hello.txt',
    Body: 'Hello World'
  };

  try {
    await s3.upload(params).promise();

    const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('getObject', {
        Bucket: params.Bucket,
        Key: params.Key,
        Expires: signedUrlExpireSeconds
    })

    return { statusCode: 200, body: url };
  } catch(err) {
    return { statusCode: 500, body: JSON.stringify(err) };
  }
};