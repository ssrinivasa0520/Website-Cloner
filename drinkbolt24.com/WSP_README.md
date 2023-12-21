# Introduction 
App is Windows. 

#App Arch
App has database. 

# Build 
App has Build pipeline, wherein code is archived and published.

#Release
In Release pipeline, code is being extracted from archives, config file is being tokenized and App pool and website are being started in stage and production environment. 
No compilation is happening in release process. 

#Variables Used
Variables are created for Database, which are included in web.config file
DATABASE, USERNAME, HOST & PASSWORD are the variables created and added in pipeline. 
**PLEASE DO NOT EDIT THE VARIABLES IN web.config** 
These variable values are replaced using the tokenisation task of Azure Devops.

#Files Edited
web.config : tokenization added for DB connection

