#!/bin/bash

# Make sure you have awscli installed, on mac that would be `pip install awscli`

AWS_ACCESS_KEY_ID=AKIAIFL64RDMAW64AJGQ
AWS_SECRET_ACCESS_KEY=sekritsekritkey

yarn export

sed -i '' 's/\/_next/_next/g' out/index.html

aws s3 cp --recursive --acl public-read 'out' 's3://precious-snowflake'