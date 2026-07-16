function convert(){
        let Cmvalue = Number(document.getElementById('values').value)
        let Invalue = Cmvalue/2.54
        let result = document.getElementById('result')
        result.innerHTML = Invalue.toFixed(3)
        }