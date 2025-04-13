function calcSum() {
    value1 =
    parseInt(document.mainForm.child.value);
    value2 =
    parseInt(document.mainForm.adult.value);
    sum = value1*5 + value2*10;
    document.mainForm.textBoxSum.value = sum;

    }