/** 
 * Size verilen iki adet array’den
 * uygun methodları kullanarak yeni
 * bir object oluşturmanız gerekiyor.
 * Ve bu obje key-value şeklinde 
 * doğru eşleştirme yapılarak
 * oluşturulmalı. 
 */
 const input = {
    "cols": ["Name Surname", "Company", "Email", "Date", "Country", "City"],
    "data": [
        ["Hyacinth Vincent", "Duis Corporation", "iaculis.enim@magnaCrasconvallis.ca", "28/06/2022", "Eritrea", "Lyubertsy"],
        ["Brenden Martinez", "Volutpat Nunc Associates", "iaculis@estMauris.org", "24/03/2021", "British Indian Ocean Territory", "Colwood"]]
}

 const sütunlar= input.cols
 const satırlar= input.data
 const output= []
 satırlar.forEach((satır, satırNo)=>{
    const satırYeni= {}
    satır.forEach((sütunDeger, sütunNo)=>{
        const key= sütunlar[sütunNo]
        satırYeni[key]= sütunDeger
    })
    output.push(satırYeni)
 })
console.log(output);