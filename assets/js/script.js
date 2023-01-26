function getData() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let description = document.getElementById('description').value

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(description)

    if (name == "") {
        alert("Nama harus di isi dahulu!")
    } else if (email == "") {
        alert("Email harus di isi")
    } else if (phone == "") {
        alert("Nomor HP harus di isi")
    } else if (subject == "") {
        alert("Subject harus di isi")
    } else if (description == "") {
        alert("Your Message harus di isi")
    }


    const defaultEmail = "affanghofar35@gmail.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Hello My Name ${name}, ${description}, Let's Talk with me on My Number ${phone}`
    mailTo.click()

    let audience = {
        name,
        email,
        phone,
        subject,
        description
    }

    console.log(audience)

}