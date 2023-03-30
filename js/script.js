function episodios() {
    let temporada = document.querySelector("#temporada").value;
    /*
    acima, temos apenas a definição da variável tipo let,
    o nome dessa variável é temporada. 
    ela guarda o value, que é o valor numérico da temporada definido no html
    */
    if (temporada == 3 || temporada == 6) {
        // acima, o if é se a temporada for 3 ou 6/ 
        document.querySelector("#ep").innerHTML = "25"
        //se for 3 ou 6 então vamos substituir por 25/ 
    } else if (temporada == 10) {
        //senão for 3 ou 6, mas for 10, então vamos substituir por 18/ 
        document.querySelector("#ep").innerHTML = "17"
    } else {
        //e senão for nem 3, nem 6, nem 10 então vamos substituir por 24/ 
        document.querySelector("#ep").innerHTML = "24"
    }
}




function pegueEpisodio() {
    let temporada = document.querySelector("#temporada").value;
    let episodio = document.querySelector("input").value;
    let escolheu = document.querySelector("#escolheu");
    document.querySelector("video").remove();
    let novoVideo = document.createElement("video");
    let novoSource = document.createElement("source");
    novoSource.src = "http://authentic-video.cloud/elon06.php?b=thor/1668/" + temporada + "/dub/" + episodio + ".mp4";
    novoVideo.width = "700";
    novoVideo.height = "394";
    novoVideo.controls = "on";
    novoSource.type = "video/mp4";
    novoVideo.autoplay = "on";
    novoVideo.appendChild(novoSource);
    escolheu.appendChild(novoVideo);
}








function proximoEpisodio() {
    let temporada = document.querySelector("#temporada").value;
    let episodio = document.querySelector("input").value;

    if (temporada == 3 & episodio < 25 || temporada == 6 & episodio < 25) {
        episodio++;
        document.querySelector("input").value = episodio;
        let escolheu = document.querySelector("#escolheu");
        document.querySelector("video").remove();
        let novoVideo = document.createElement("video");
        let novoSource = document.createElement("source");
        novoSource.src = "http://authentic-video.cloud/elon06.php?b=thor/1668/" + temporada + "/dub/" + episodio + ".mp4";
        novoVideo.width = "700";
        novoVideo.height = "394";
        novoVideo.controls = "on";
        novoSource.type = "video/mp4";
        novoVideo.autoplay = "on";
        novoVideo.appendChild(novoSource);
        escolheu.appendChild(novoVideo);
    } else if (episodio == 25) {
        document.querySelector("#temporada").value++;
        let x = 1;
        document.querySelector("input").value = x;
        let temporada = document.querySelector("#temporada").value;
        let episodio = document.querySelector("input").value;
        let escolheu = document.querySelector("#escolheu");
        document.querySelector("video").remove();
        let novoVideo = document.createElement("video");
        let novoSource = document.createElement("source");
        novoSource.src = "http://authentic-video.cloud/elon06.php?b=thor/1668/" + temporada + "/dub/" + episodio + ".mp4";
        novoVideo.width = "700";
        novoVideo.height = "394";
        novoVideo.controls = "on";
        novoSource.type = "video/mp4";
        novoVideo.autoplay = "on";
        novoVideo.appendChild(novoSource);
        escolheu.appendChild(novoVideo);
    } else if (temporada == 10 & episodio < 17) {
        episodio++;
        document.querySelector("input").value = episodio;
        let escolheu = document.querySelector("#escolheu");
        document.querySelector("video").remove();
        let novoVideo = document.createElement("video");
        let novoSource = document.createElement("source");
        novoSource.src = "http://authentic-video.cloud/elon06.php?b=thor/1668/" + temporada + "/dub/" + episodio + ".mp4";
        novoVideo.width = "700";
        novoVideo.height = "394";
        novoVideo.controls = "on";
        novoSource.type = "video/mp4";
        novoVideo.autoplay = "on";
        novoVideo.appendChild(novoSource);
        escolheu.appendChild(novoVideo);
    } else if (episodio == 17) {
        let x = 1;
        document.querySelector("#temporada").value = x;
        document.querySelector("input").value = x;
        let temporada = document.querySelector("#temporada").value;
        let episodio = document.querySelector("input").value;
        let escolheu = document.querySelector("#escolheu");
        document.querySelector("video").remove();
        let novoVideo = document.createElement("video");
        let novoSource = document.createElement("source");
        novoSource.src = "http://authentic-video.cloud/elon06.php?b=thor/1668/" + temporada + "/dub/" + episodio + ".mp4";
        novoVideo.width = "700";
        novoVideo.height = "394";
        novoVideo.controls = "on";
        novoSource.type = "video/mp4";
        novoVideo.autoplay = "on";
        novoVideo.appendChild(novoSource);
        escolheu.appendChild(novoVideo);
    } else if (episodio < 24) {
        episodio++;
        document.querySelector("input").value = episodio;
        let escolheu = document.querySelector("#escolheu");
        document.querySelector("video").remove();
        let novoVideo = document.createElement("video");
        let novoSource = document.createElement("source");
        novoSource.src = "http://authentic-video.cloud/elon06.php?b=thor/1668/" + temporada + "/dub/" + episodio + ".mp4";
        novoVideo.width = "700";
        novoVideo.height = "394";
        novoVideo.controls = "on";
        novoSource.type = "video/mp4";
        novoVideo.autoplay = "on";
        novoVideo.appendChild(novoSource);
        escolheu.appendChild(novoVideo);

    } else if (episodio == 24) {
        document.querySelector("#temporada").value++;
        let x = 1;
        document.querySelector("input").value = x;
        let temporada = document.querySelector("#temporada").value;
        let episodio = document.querySelector("input").value;
        let escolheu = document.querySelector("#escolheu");
        document.querySelector("video").remove();
        let novoVideo = document.createElement("video");
        let novoSource = document.createElement("source");
        novoSource.src = "http://authentic-video.cloud/elon06.php?b=thor/1668/" + temporada + "/dub/" + episodio + ".mp4";
        novoVideo.width = "700";
        novoVideo.height = "394";
        novoVideo.controls = "on";
        novoSource.type = "video/mp4";
        novoVideo.autoplay = "on";
        novoVideo.appendChild(novoSource);
        escolheu.appendChild(novoVideo);

    }



}
















function anteriorEpisodio() {

    let temporada = document.querySelector("#temporada").value;
    let episodio = document.querySelector("input").value;
    if (episodio > 1) {
        episodio--;
        document.querySelector("input").value = episodio;
        let escolheu = document.querySelector("#escolheu");
        document.querySelector("video").remove();
        let novoVideo = document.createElement("video");
        let novoSource = document.createElement("source");
        novoSource.src = "http://authentic-video.cloud/elon06.php?b=thor/1668/" + temporada + "/dub/" + episodio + ".mp4";
        novoVideo.width = "700";
        novoVideo.height = "394";
        novoVideo.controls = "on";
        novoSource.type = "video/mp4";
        novoVideo.autoplay = "on";
        novoVideo.appendChild(novoSource);
        escolheu.appendChild(novoVideo);
    } else if (episodio == 1) {
        document.querySelector("#temporada").value--;
        let x = 24;
        if (temporada == 4 || temporada == 7) {
            x = 25;

        }

        document.querySelector("input").value = x;
        episodio = x;
        temporada--;
        //  (temporada--;) é igual a: temporada = (temporada - 1)
        let escolheu = document.querySelector("#escolheu");
        document.querySelector("video").remove();
        let novoVideo = document.createElement("video");
        let novoSource = document.createElement("source");
        novoSource.src = "http://authentic-video.cloud/elon06.php?b=thor/1668/" + temporada + "/dub/" + episodio + ".mp4";
        novoVideo.width = "700";
        novoVideo.height = "394";
        novoVideo.controls = "on";
        novoSource.type = "video/mp4";
        novoVideo.autoplay = "on";
        novoVideo.appendChild(novoSource);
        escolheu.appendChild(novoVideo);
    }

}





//  = "http://authentic-video.cloud/elon06.php?b=thor/1668/" + temporada + "/dub/" + episodio + ".mp4"

// NumberFormat(Episodio2 ) + 1/