import {ASVGLabRenderGraphicsComponent} from "../../AniGraph/src/acomponent/apps/svglab";
import ExampleExplicitParticleView from "./viewclasses/ExampleExplicitParticleView";


export default class CustomViewsComponent extends ASVGLabRenderGraphicsComponent{
    initViewClasses(){
        super.initViewClasses();
        this.addViewClass(ExampleExplicitParticleView);
    }
}







