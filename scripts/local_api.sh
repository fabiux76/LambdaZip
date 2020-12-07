sam local start-api --env-vars Debug/env.json -t template.yml \
    --parameter-overrides S3DocumentsBucketName=lambdaziporig ApiKeyRequired=false