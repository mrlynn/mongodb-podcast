#!/bin/sh
source .env
env | grep API
realm-cli login --api-key=$REALM_PUBLIC_API_KEY --private-api-key=$REALM_PRIVATE_API_KEY


