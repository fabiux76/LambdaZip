sam deploy --template-file package.yml --stack-name LocalDeploy \
    --capabilities CAPABILITY_IAM --parameter-overrides S3DocumentsBucketName=lambdaziporig \
    DomainName=local.lambdazip.clumsycloud.com \
    CertificateArn=arn:aws:acm:eu-west-1:955501240318:certificate/13f0106b-6211-499a-b778-7e903e3c0c81 \
    HostedZoneId=Z069410742ABPYMTUIBK