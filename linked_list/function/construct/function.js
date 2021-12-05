const inputValue = document.getElementById("value-insert")
const inputIndexOfValue = document.getElementById("index-insert")
const inputIndexOfFind = document.getElementById("index-find-delete")
const textAlert = document.getElementById("textAlert")

var indexRun = -1;
var valueInput = -1;
var doRun = false;

function insertNodeFunction(){
    if(inputIndexOfValue.value !== ""){
        indexRun = parseInt(inputIndexOfValue.value);
        inputIndexOfValue.value = "";
        textAlert.innerHTML = "Thông báo: Nhập giá trị thành công"
        if(inputValue.value !== ""){
            passIndex = false
            valueInput = inputValue.value;
            inputValue.value = "";
            doRun = true;
            textAlert.innerHTML = "Thông báo: Nhập giá trị thành công"
            if (indexRun>=0){
                if(indexRun <= ll.size_of_list()){
                    if (doRun){
                        insertNodeShow(indexRun,valueInput)
                        doRun = false;
                    }
                }
                else{
                    textAlertCode.innerHTML = "code: insert node, tìm kiếm phần tử index - 1"
                    hoverAll()
                }
            }
            else{
                textAlert.innerHTML = "Thông báo: Nhập sai giá trị đầu vào idex > 0"
            }
        }else{
            textAlert.innerHTML = "Thông báo: Bạn phải nhập giá trị để chèn vào"
        }  
    }
    else{
        textAlert.innerHTML = "Thông báo: Bạn phải nhập giá trị index để xắp xếp"
    } 
        
}

function FindNodeFunction(type){
    if(inputIndexOfFind.value !== ""){
        indexRun = parseInt(inputIndexOfFind.value)
        inputIndexOfFind.value = "";
        doRun = true;
        textAlert.innerHTML = "Thông báo: Nhập giá trị thành công"
        if (indexRun>=0){
            if(indexRun < ll.size_of_list()){
                if (doRun && type === 0){
                    findNodeShow(indexRun)
                    doRun = false;
                }
                if (doRun && type === 1){
                    deleteNodeShow(indexRun)
                    doRun = false;
                }
            } 
            else{
                hoverAll()
                if (type === 0){
                    textAlertCode.innerHTML = "Code: Find node, tìm kiếm phần tử index - 1"
                }else{
                    textAlertCode.innerHTML = "Code: Delete node, tìm kiếm phần tử index - 1"
                }            
            }
        }else{
            textAlert.innerHTML = "Thông báo: Nhập sai giá trị đầu vào idex > 0"
        }
    }else{
        textAlert.innerHTML = "Thông báo: Bạn phải nhập giá trị index để xắp xếp"
    }
}

