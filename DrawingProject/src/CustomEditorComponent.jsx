import {ASVGLabEditGraphicsComponent} from "AniGraph";
import {ABoundingBox2DController, AIDragScaleAroundAnchor, AIDragAnchor, AIDragShapePosition} from "AniGraph"
import ExampleInteraction from "./interactions/ExampleInteraction";

export default class CustomEditorComponent extends ASVGLabEditGraphicsComponent{
    initEditModes(){
        super.initEditModes();
        this.addSelectionController('Example', new ABoundingBox2DController({
            component: this,
            handleInteractionClasses: [AIDragScaleAroundAnchor],
            anchorInteractionClasses: [AIDragAnchor],
            hostViewInteractionClasses: [ExampleInteraction],
            groupBoxInteractionClasses: [ExampleInteraction]
        }));
    }

}

