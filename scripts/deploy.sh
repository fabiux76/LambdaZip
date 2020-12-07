sam deploy --template-file package.yml --stack-name LocalDeploy \
    --capabilities CAPABILITY_IAM --parameter-overrides S3DocumentsBucketName=lambdaziporig