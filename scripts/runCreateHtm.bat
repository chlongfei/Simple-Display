@echo off

cd public/uploads
robocopy "../../scripts" "./" createHtm.vbs
cscript createHtm.vbs