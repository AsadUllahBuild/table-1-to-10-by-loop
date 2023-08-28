const head1 = document.getElementById("head1");
for (let i = 1; i <= 10; i++) {
    // console.log(`${i} * ${1} = ${i * 1}`);
    head1.innerHTML += (` <br />`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
        head1.innerHTML += (`${i} * ${j} = ${i * j} <br />`);

    }
}


const head2 = document.getElementById("head2");
for (let i = 11; i <= 20; i++) {
    head2.innerHTML += (`<br/>`);

    for (let j = 1; j <= 10; j++) {
        head2.innerHTML += (`${i} * ${j} = ${i * j} <br/>`);
    }
}


const head3 = document.getElementById("head1");
for (let i = 21; i <= 30; i++) {
    // console.log(`${i} * ${1} = ${i * 1}`);
    head3.innerHTML += (` <br />`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
        head3.innerHTML += (`${i} * ${j} = ${i * j} <br />`);

    }
}


const head4 = document.getElementById("head2");
for (let i = 31; i <= 40; i++) {
    head4.innerHTML += (`<br/>`);

    for (let j = 1; j <= 10; j++) {
        head4.innerHTML += (`${i} * ${j} = ${i * j} <br/>`);
    }
}
const head5 = document.getElementById("head2");
for (let i = 41; i <= 100; i++) {
    head5.innerHTML += (`<br/>`);

    for (let j = 1; j <= 10; j++) {
        head5.innerHTML += (`${i} * ${j} = ${i * j} <br/>`);
    }
}


