function darkToggleSwitch()
{
    const span = document.getElementById('darkSpan');
    var spantext = span.textContent.trim();

    if(spantext == 'light_mode')
    {
        document.body.style.transitionDuration = '0.2s';
        document.getElementById("darkSpan").textContent = "dark_mode";
        document.body.style.backgroundColor = '#121212';
        document.getElementById("input-label").style.color = '#f9f9f9';
        document.getElementById("input-label1").style.color = '#f9f9f9';
        document.getElementById("input-label2").style.color = '#f9f9f9';
        document.getElementById("input-label3").style.color = '#f9f9f9';
        document.getElementById("input-label4").style.color = '#f9f9f9';
        document.getElementById("input-label5").style.color = '#f9f9f9';
        document.getElementById("input-label6").style.color = '#f9f9f9';
        document.getElementById("input-label7").style.color = '#f9f9f9';
        document.getElementById("input-label8").style.color = '#f9f9f9';
        
        document.getElementById("dark-toggle").style.backgroundColor = '#252525';

        document.getElementById("Name").style.backgroundColor = '#464646';
        document.getElementById("Name").style.color = '#ffffff';

        document.getElementById("Date").style.backgroundColor = '#464646';
        document.getElementById("Date").style.color = '#ffffff';

        document.getElementById("Role").style.backgroundColor = '#464646';
        document.getElementById("Role").style.color = '#ffffff';

        document.getElementById("photography").style.backgroundColor = '#464646';
        document.getElementById("photography").style.color = '#ffffff';

        document.getElementById("Number").style.backgroundColor = '#464646';
        document.getElementById("Number").style.color = '#ffffff';

        document.getElementById("mail").style.backgroundColor = '#464646';
        document.getElementById("mail").style.color = '#ffffff';

        document.getElementById("comment").style.backgroundColor = '#464646';
        document.getElementById("comment").style.color = '#ffffff';

        document.getElementById("reset-button").style.color = '#ffffff';

        document.getElementById("gallery").style.backgroundColor = '#252525';
        document.getElementById("desc").style.color = '#ffffff';

        document.getElementById("gallery1").style.backgroundColor = '#252525';
        document.getElementById("desc1").style.color = '#ffffff';

        document.getElementById("gallery2").style.backgroundColor = '#252525';
        document.getElementById("desc2").style.color = '#ffffff';

        document.getElementById("gallery3").style.backgroundColor = '#252525';
        document.getElementById("desc3").style.color = '#ffffff';

        document.getElementById("polaroidnew").style.backgroundColor = '#252525';

        document.getElementById("darkSpan").style.color = '#f9f9f9';
        document.getElementById("heading-pixobia").style.color = '#f9f9f9';
        document.getElementById("thirdpara").style.color = '#ffffff';
        document.getElementById("margin").style.backgroundColor = '#252525';
    }
    else if(spantext == 'dark_mode')
    {
        document.body.style.transitionDuration = '0.2s';
        document.getElementById("darkSpan").innerHTML = "light_mode";
        document.body.style.backgroundColor = '#ffffff';
        document.getElementById("margin").style.backgroundColor = '#f9f9f9';
        document.getElementById("heading-pixobia").style.color = '#000000';
        document.getElementById("darkSpan").style.color = '#000000';

        document.getElementById("input-label").style.color = '#000000';
        document.getElementById("input-label1").style.color = '#000000';
        document.getElementById("input-label2").style.color = '#000000';
        document.getElementById("input-label3").style.color = '#000000';
        document.getElementById("input-label4").style.color = '#000000';
        document.getElementById("input-label5").style.color = '#000000';
        document.getElementById("input-label6").style.color = '#000000';
        document.getElementById("input-label7").style.color = '#000000';
        document.getElementById("input-label8").style.color = '#000000';
        document.getElementById("dark-toggle").style.backgroundColor = '#ffffff';

        document.getElementById("Name").style.backgroundColor = '#ffffff';
        document.getElementById("Name").style.color = '#000000';

        document.getElementById("Date").style.backgroundColor = '#ffffff';
        document.getElementById("Date").style.color = '#000';

        document.getElementById("Role").style.backgroundColor = '#ffffff';
        document.getElementById("Role").style.color = '#000';

        document.getElementById("photography").style.backgroundColor = '#ffffff';
        document.getElementById("photography").style.color = '#000';

        document.getElementById("Number").style.backgroundColor = '#ffffff';
        document.getElementById("Number").style.color = '#000';

        document.getElementById("mail").style.backgroundColor = '#ffffff';
        document.getElementById("mail").style.color = '#000';

        document.getElementById("comment").style.backgroundColor = '#ffffff';
        document.getElementById("comment").style.color = '#000';

        document.getElementById("gallery").style.backgroundColor = '#ffffff';
        document.getElementById("desc").style.color = '#000';

        document.getElementById("gallery1").style.backgroundColor = '#ffffff';
        document.getElementById("desc1").style.color = '#000';

        document.getElementById("gallery2").style.backgroundColor = '#ffffff';
        document.getElementById("desc2").style.color = '#000';

        document.getElementById("gallery3").style.backgroundColor = '#ffffff';
        document.getElementById("desc3").style.color = '#000';

        document.getElementById("polaroidnew").style.backgroundColor = '#ffffff';

        document.getElementById("reset-button").style.color = '#000';
    }
}
