# Introduction 
App is Static HTML (CDN). 

#App Arch
App do not has any database and PVC and logs

# Build 
App has Build pipeline, wherein code is being archived

#Release
In Release pipeline, artifacts are being copied inside S3 bucket and then CDN invalidation is performed. 
No compilation is happening in release process. 

#Variables Used
No Variable have been used in any of the files

# Files Modified: 
none of the files have been modified. 