function find(x, array) {
  for (var i = 0; i < array.patterns.length; i++) {
    if (array.patterns[i].name == x) {
      return array.patterns[i];
    }
  }
}

const patterns = require('./patterns.json'); 

const getDefinition = async (pattern, prop) => {
  // general structure of a message
  const baseMessage = {
    type: 'text',
    markdown: false
  }


  var messages = [
    { ...baseMessage, text: `base message` }
  ]


  let message = find(pattern, patterns);
  

  if (prop == "context") {  
    messages = [
      { ...baseMessage, text: message.context },
    ]
  }

  if (prop == "application") {
    messages = [
      { ...baseMessage, text: message.application },
    ]
  }

  if (prop == ("example")) {
    messages = [
      { ...baseMessage, text: message.example },
    ]
  }

  if (prop == ("consequences")) {
    messages = [
      { ...baseMessage, text: message.consequences },
    ]
  }

  if (prop == ("relatedPatterns")) {
    messages = [
      { ...baseMessage, text: message.relatedPatterns },
    ]
  }

  await bp.events.replyToEvent(event, messages)
}

return getDefinition(args.pattern, args.prop);