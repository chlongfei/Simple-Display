Const xlHtml = 44
parent = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)

' Create an instance of Excel and open the workbook...
Set objExcel = CreateObject("Excel.Application")

' Disable Alerts
objExcel.DisplayAlerts = False

objExcel.DefaultWebOptions.RelyOnCSS = True
objExcel.Workbooks.Open parent & "/active.xlsx"

' Save the workbook as an HTML or MHTML page...
objExcel.ActiveWorkbook.SaveAs parent & "/active.html",  xlHtml

' Close Excel...
objExcel.Quit