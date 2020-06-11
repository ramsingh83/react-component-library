#!/bin/bash

JS_BUILD_DIR="dist"
DIST_REPO=${DIST_REPO-"ssh://git@andotbt.royalmailgroup.net:8000/rmg/react-shared-library-dist.git"}
DIST_CLONE_LOCATION="dist"
# Get latest commit message from development repository.
MERGE_MESSAGE=`git log --merges --oneline -n 1`

# Checks that build folder has content.
if [ "$(ls -A $JS_BUILD_DIR)" ]
then
    echo "Folder $JS_BUILD_DIR contain the application compiled files. Pushing result to distributable repo"

    git clone --depth 1 ${DIST_REPO} ${DIST_CLONE_LOCATION} || exit 1

    # remove existing files from repository build directory and copy the local new built ones.
    cd ${DIST_CLONE_LOCATION} && git rm -r ${JS_BUILD_DIR}/*
    cp -vr ../${JS_BUILD_DIR} .

    git add -A
    # BUILD_NUMBER variable from Jenkins job.
    git commit -m "Automated commit - BUILD: ${BUILD_NUMBER} - ${MERGE_MESSAGE}"
    git push origin HEAD
else
    echo "$JS_BUILD_DIR is empty"
    exit 1
fi
