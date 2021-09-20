@echo off

cd build/uploads
robocopy "../../scripts" "./" createHtm.vbs
cscript createHtm.vbs