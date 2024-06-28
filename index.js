document.getElementById('jump').addEventListener('click',() => {
    const x = Math.random() * 360;
    const y = Math.random() * 180 - 90;
    //googleマップの構文　https://www.google.com/maps?q=(緯度),(経度)
    const url = "https://www.google.com/maps/@" + y + "," + x + ",8.22z?entry=ttu";
    console.log(url);
    window.open(url, '_blank');
})