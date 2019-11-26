function myFunction() {

    var x = document.getElementById("frm1");

    var value = x.elements[0].value;

    var div1 = x.elements[1].value;

    var div2 = x.elements[2].value;

    var text="";

    var i;

    for (i = 1; i <= value; i++) {

        if (i % div1 == 0 && i % div2 == 0) {

          text += "Bisch-Bosch" + ", ";

        } else if (i % div1 == 0) {

            text+="Bisch" + ", ";


        } else if (i % div2 == 0) {

            text+="Bosch" + ", ";

        } else {

          text+=i + ", ";

        }


    }

    document.getElementById("demo").innerHTML = text;

}