let isPraktikan = confirm("Apakah Anda praktikan PPW1");
if (isPraktikan){
    let nama = prompt("Siapa nama Anda?");
    let nim = prompt("Berapa NIM Anda?");
    let angkatan = prompt("Anda angkatan berapa?");

    try {
        document.getElementById("hasil-output").innerHTML = `<table>
        <tr>
            <td>Nama</td>
            <td>:${nama}</td>
        </tr>
        <tr>
            <td>NIM</td>
            <td>:${nim}</td>
        </tr>
        <tr>
            <td>Angkatan</td>
            <td>:${angkatan}</td>
        </tr>
    </table>`;
    } catch (error) {
        alert(error);
    }
    
} else{
    alert("Anda tidak boleh masuk!")
}