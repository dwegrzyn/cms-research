/*var testIntroContent = {
  clinicians: "hi clinicians",
  families: "what's up families",
  researchers: "greetings researchers",
  coaches: "hello coaches"};
*/



var introContent = {
clinicians: "<p>This is an intro message for clinicians!</p> The Infant Caregiver Project is a developmental psychology laboratory led by Dr. Mary Dozier, Amy E. du Pont Chair of Child Development and Professor of Psychology at the University of Delaware. We conduct basic and translational research with children and families. You can get involved as a clinician by doing x y z.",
  
  families: "<p>This is a welcome for families!</p> The Infant Caregiver Project is a developmental psychology laboratory at the University of Delaware. At the Infant Caregiver Project, we are interested in studying how young children develop. Specifically, we investigate the effectiveness of parent-training interventions with families from a variety of backgrounds. We currently are looking for families with toddlers and families with children to participate in these projects",
  
  researchers: "<p>This is a greeting for researchers!</p> The Infant Caregiver Project is a developmental psychology laboratory led by Dr. Mary Dozier, Amy E. du Pont Chair of Child Development and Professor of Psychology at the University of Delaware. We conduct basic and translational research with children and families. Specifically, our research focuses on Attachment and Biobehavioral Catch-up (ABC), which helps caregivers provide nurturing care and engage in synchronous interactions with their children. In light of the evidence supporting the effectiveness of ABC, efforts have begun to disseminate the program at multiple sites across the nation and internationally.",
  
  coaches: "<p>This is a hello for coaches!</p> The Infant Caregiver Project helps train caregivers to provide nurturing care and engage in real time interactions with their children. You can be a part of it as a coach who helps parents and guardians. We have training programs for you as well to thoroughly prepare you to help these families.",
}



document.getElementById("button-coaches").addEventListener("click", function(){
                                                  document.getElementById("intro-description").innerHTML= introContent.coaches;});

document.getElementById("button-clinicians").addEventListener("click", function(){
                                                           document.getElementById("intro-description").innerHTML= introContent.clinicians;});

document.getElementById("button-families").addEventListener("click", function(){
                                                           document.getElementById("intro-description").innerHTML= introContent.families;});

document.getElementById("button-researchers").addEventListener("click", function(){
                                                           document.getElementById("intro-description").innerHTML= introContent.researchers;});