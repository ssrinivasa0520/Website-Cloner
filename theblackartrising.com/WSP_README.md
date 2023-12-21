# Introduction 
App is LAMP Custom. 

#App Arch
App has database and PVC. 

# Build 
App has Build pipeline, wherein docker image is created.

#Release
In Release pipeline, docker image is getting deployed in stage and production environment. 
No compilation is happening in release process. 

#Variables Used
Variables are created for Database, which are included in .env file
DATABASE, USERNAME, HOST & PASSWORD are the variables created and added in pipeline. 
These variable values are replaced using the tokenisation task of Azure Devops.

#Files Edited
.env : tokenization added for DB connection

