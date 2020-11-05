import {
    Matrix3x3,
    Vec2,
    Precision,
    ADragInteraction,
    ADragValueInteraction
} from "AniGraph"

export default class ExampleInteraction extends ADragInteraction{
    static Create(args){
        // Use the super class's Create function to instantiate the AInteraction subclass that we will return
        const interaction = super.Create(args);
        interaction.model = interaction.controller.getModel();

        //define the drag start callback
        interaction.setDragStartCallback(event=>{
            if(!interaction.elementIsTarget(event)){return;}
            event.preventDefault();
            // Do something
        });

        //now define a drag move callback
        interaction.setDragMoveCallback(event=> {
            event.preventDefault();
            // First we transform our new cursor location to scale space.
            const newCursorScreenCoordinates = interaction.getEventPositionInContext(event);

            //do somehting. e.g., rotate to world point newCursorScreenCoordinates
        });
        //we can optionally define a drag end callback
        interaction.setDragEndCallback(event=>{
            event.preventDefault();
        });

        //Finally, return the interaction
        return interaction;
    }
}
