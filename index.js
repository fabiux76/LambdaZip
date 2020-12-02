const aws = require('aws-sdk');
const uuid = require('uuid');

aws.config.update({region: 'eu-west-1'});
const s3 = new aws.S3();

exports.handler = async function(event, context) {

  const { body } = event;
  const { name, surname } = JSON.parse(body);

  const params = {
    Bucket: process.env.S3_BUCKET_ZIP,
    Key: uuid.v1(),
    Body: `Hello ${name} ${surname}`
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