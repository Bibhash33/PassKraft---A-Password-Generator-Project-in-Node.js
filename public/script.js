function generatePassword(){
    const length = document.getElementById("length").value;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+1234567890";
    let password = "";
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    for(let i=0; i < length;  i++){
        password += chars[array[i] % chars.length];
    }

    document.getElementById("result").value = password;
}

function copyPassword(){
    const result = document.getElementById("result");
    result.select();
    document.execCommand("copy");
    result.value = ""

}