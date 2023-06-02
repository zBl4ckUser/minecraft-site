function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('tbl_exporttable_to_xls');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
 }

function soundChange(){
  var audio = document.getElementById("background-music"); 
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
  }
  audio.volume = 0.105
  
}