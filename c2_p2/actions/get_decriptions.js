  const getDefinition = async pattern => {
    // general structure of a message
    const baseMessage = {
      type: 'text',
      markdown: false
    }

    var messages = [{ ...baseMessage, text: `base message` }]

    if (pattern == 'UX Acceptance Criteria') {
      messages = [
        {
          ...baseMessage,
          text: `UX information of the User Story is included, which might have or not the assistance of a UX expert, during the elaboration of acceptance criteria which additionally highlight the importance of this UX information.`
        }
      ]
    }
    // each message represents a speech bubble
    if (pattern == 'UX Tasks') {
      messages = [
        {
          ...baseMessage,
          text: `It is proposed the creation of a specific UX task when there is significant work related to the UX requirements. This UX task should reflect the UX requirements that require a specific time and effort to be implemented.`
        },
        {
          ...baseMessage,
          text: `This process brings UX closer to actual software development since the tasks define concrete actions to achieve the UX requirements.`
        },
        {
          ...baseMessage,
          text: `A UX task can be created like a standard task in the US, but it should be created with the UX expert and categorized differently to emphasize that it is related to the UX, which might require team members with a more specific set of skills.`
        }
      ]
    }

    if (pattern == 'UX Concern') {
      messages = [
        {
          ...baseMessage,
          text: `The UX Concern represents a UX activity that requires a more significant effort, has a complexity level higher than usual, and that is orthogonal to other functionalities represented in the USs.`
        },
        {
          ...baseMessage,
          text: `By putting the UX Concern in the same level as a US, it is possible to plan, estimate and prioritize this work independently.`
        },
        {
          ...baseMessage,
          text: `The UX Concern should be managed, planned, and estimated independently by the professional responsible for the UX and should be handled in the same importance as a User Story by the team.`
        }
      ]
    }

    if (pattern == 'UX Specific Repository') {
      messages = [
        {
          ...baseMessage,
          text: `A specific repository for the Epic should be created from which the artifacts and the UX information produced as a result of the tasks will be stored.`
        },
        {
          ...baseMessage,
          text: `This repository will be standard place for the developers to find easily artifacts and UX information that are specific to a US.`
        },
        {
          ...baseMessage,
          text: `This repository can be elaborated in a wiki-based structure. A connection between the User Stories and the repository is demanded to keep a short navigation distance and consequently, alow effort to access the information in the repository from the US.`
        }
      ]
    }

    if (pattern == 'UX Central Repository') {
      messages = [
        {
          ...baseMessage,
          text: `Creating a central UX repository is the solution to the duplication and inconsistency problem of having common UX information in several USs.`
        },
        {
          ...baseMessage,
          text: `This repository aims to centralize in one single point the same UX information related to several USs.`
        },
        {
          ...baseMessage,
          text: `To support this pattern, the tool should allow the addition of links on the US that points to the files in the Central UX Repository.`
        }
      ]
    }

    // Send the messages to the user
    await bp.events.replyToEvent(event, messages)
  }

  return getDefinition(args.pattern)