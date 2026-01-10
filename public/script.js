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
    updateStrength(password);
}

function updateStrength(password){
    const strength = document.getElementById("strength");
    strength.className = "strength";

    
    if(password.length < 10){
        strength.textContent = "Weak";
        strength.classList.add("weak");

    }else if(password.length < 16){
        strength.textContent = "Medium";
        strength.classList.add("medium");
    }
    else{
        strength.textContent = "Strong";
        strength.classList.add("strong");
    }
}

function copyPassword(){
    const result = document.getElementById("result");
    result.select();
    document.execCommand("copy");
    result.value = ""

}
