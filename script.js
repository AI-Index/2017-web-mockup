var idToImage = {
    /* Volume Actvitiy */
    "volume": "VolumeIndex.png",
    "publication": "Publications.png",
    "conference": "SubConference00-15.png",
    "venture": "USA-VC.png",
    "shipments": "SubRobotics00-15.png",
    "media": "PublicMedia.png",

    /* Technical Progress */
    "vision": "Vision.png",
    "speech": "Speech.png",
    "nlu": "Vision.png",
    "mt": "Vision.png",
    "sat": "Vision.png",
    "tp": "Vision.png"
}
var idToDescription = {
    "volume": "This is the highest level “Volume of Activity” metric, combining sub-indices of activty in areas academia, industry, government and public media. It is calculated by taking a weighted sum of the sub-indices, where the weights given to each sub-index are set by hand by the AI Index team.",
    "publication": "Publication: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui lacus, congue vel porttitor id, interdum quis enim. Morbi enim elit, fermentum eget efficitur non, ult.",
    "conference": "Conference: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui lacus, congue vel porttitor id, interdum quis enim. Morbi enim elit, fermentum eget efficitur non, ult.",
    "venture": "Venture: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui lacus, congue vel porttitor id, interdum quis enim. Morbi enim elit, fermentum eget efficitur non, ult.",
    "shipments": "Shipments: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui lacus, congue vel porttitor id, interdum quis enim. Morbi enim elit, fermentum eget efficitur non, ult.",
    "media": "Media: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui lacus, congue vel porttitor id, interdum quis enim. Morbi enim elit, fermentum eget efficitur non, ult.",

    /* Technical Progress */
    "vision": "This is the highest level “Volume of Activity” metric, combining sub-indices of activty in areas academia, industry, government and public media. It is calculated by taking a weighted sum of the sub-indices, where the weights given to each sub-index are set by hand by the AI Index team.",
    "speech": "A machine system by Microsoft finally passed human parity in speech recognition in the “Switchboard” speech recognition environment. Like many areas of AI however, it can be dificult to attach progress over time to one quantitative figure. While the evaluation technique for speech recognition systems has largely stayed the same (Word Error Rate), the datasets have often changed.",
    "nlu": "Natural Language Understanding: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui lacus, congue vel porttitor id, interdum quis enim. Morbi enim elit, fermentum eget efficitur non, ult.",
    "mt": "Machine Translation: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui lacus, congue vel porttitor id, interdum quis enim. Morbi enim elit, fermentum eget efficitur non, ult.",
    "sat": "Satisfiability: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui lacus, congue vel porttitor id, interdum quis enim. Morbi enim elit, fermentum eget efficitur non, ult.",
    "tp": "Theorem Proving: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui lacus, congue vel porttitor id, interdum quis enim. Morbi enim elit, fermentum eget efficitur non, ult."
}
var idToTitle = {
    "volume": "Activity Index",
    "publication": "AI Publications",
    "conference": "AI Conferences",
    "venture": "Venture Capital",
    "shipments": "Robot Shipments",
    "media": "General Media",

    /* Technical Performance */
    "vision": "Visual Perception",
    "speech": "Speech Recognition",
    "nlu": "Language Understanding",
    "mt": "Machine Translation",
    "sat": "Satisfiability",
    "tp": "Theorem Proving"
}

/*
 * Setup onclick events for each metric.
*/
var metricList = document.getElementById('volume-metric-list');
var items = metricList.getElementsByTagName("li");
for (var i = 0, len = items.length; i < len; i++) {
    var metric = items[i];
    metric.onclick = (function(metric) {
        return function() {
            var metricId = metric.getAttribute('id')
            // Set the new image
            var img = document.getElementById('volume-metric-image'); 
            img.src="img/" + idToImage[metricId];

            // Add and remove the 'selected' class for new metric
            var selected = document.getElementsByClassName("selected")[0];
            selected.classList.remove("selected");
            metric.classList += " selected"

            // Update the description
            var metricDesc = document.getElementById('volume-metric-description');
            metricDesc.innerHTML = idToDescription[metricId];
            var metricTitle = document.getElementById('volume-metric-title');
            metricTitle.innerHTML = metric.innerHTML;
        }
    })(metric)
}

var metricList = document.getElementById('tech-metric-list');
var items = metricList.getElementsByTagName("li");
for (var i = 0, len = items.length; i < len; i++) {
    var metric = items[i];
    metric.onclick = (function(metric) {
        return function() {
            var metricId = metric.getAttribute('id')
            // Set the new image
            var img = document.getElementById('tech-metric-image'); 
            img.src="img/" + idToImage[metricId];

            // Add and remove the 'selected' class for new metric
            var selected = document.getElementsByClassName("selected")[1];
            selected.classList.remove("selected");
            metric.classList += " selected"

            // Update the description
            var metricDesc = document.getElementById('tech-metric-description');
            metricDesc.innerHTML = idToDescription[metricId];
            var metricTitle = document.getElementById('tech-metric-title');
            metricTitle.innerHTML = metric.innerHTML;
        }
    })(metric)
}
