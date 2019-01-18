#!/bin/bash

# Make sure you have awscli installed, on mac that would be `pip install awscli`

AWS_ACCESS_KEY_ID=AKIAJ5QMZGVMU2K54WAQ
AWS_SECRET_ACCESS_KEY=secret

yarn export

sed -i '' 's/\/_next/_next/g' out/index.html

aws s3 cp --recursive --acl public-read 'out' 's3://precious-snowflake'