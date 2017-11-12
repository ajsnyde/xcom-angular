export class ResearchTopic {

  public static allResearch: ResearchTopic[] = [];
  isAvailable: boolean = false;
  complete: boolean = false;
  name = '';
  cost = 0;
  category = '';
  //"Researches.Wolf(AND)Researches.HarridanAutopsy(OR)Researches.Wolf(AND)Researches.LightDroneWreckage(OR)Researches.Wolf(AND)Researches.MediumDroneWreckage(OR)Researches.Wolf(AND)Researches.HeavyDroneWreckage"
  reqs: string = '';
  unlocks: string[] = [];
  knowledgeShown: string[] = [];

  public static updateAvailable() {

    // go through every research item
    ResearchTopic.allResearch.forEach(research => {
      // split sets of possible fulfillment conditions for being available
      let reqSet: string[] = research.reqs.split('(OR)');
      research.isAvailable = research.isAvailable || research.reqs == "" || reqSet.some(set => {
        // then check all reqs. If all reqs are met on any given set, set isAvailable flag to true.
        return set.split('(AND)').every(req => {
          let research = ResearchTopic.allResearch.find(research => research.name == req)
          return (!!research && research.complete);
        }
        );
      })
    });
  }
}

