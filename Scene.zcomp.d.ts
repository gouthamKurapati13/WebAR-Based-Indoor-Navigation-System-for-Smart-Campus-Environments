import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { CameraEnvironmentMap as CameraEnvironmentMap_0 } from "@zcomponent/zappar-three/lib/components/environments/CameraEnvironmentMap";
import { CameraTransform as CameraTransform_1 } from "@zcomponent/three/lib/components/transforms/CameraTransform";
import { DefaultCookieConsent as DefaultCookieConsent_2 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_3 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_4 } from "@zcomponent/three/lib/components/Group";
import { DirectionalLight as DirectionalLight_5 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { Div as Div_6 } from "@zcomponent/html/lib/div";
import { H2 as H2_7 } from "@zcomponent/html/lib/headings";
import { HTML as HTML_8 } from "@zcomponent/three/lib/components/HTML";
import { ImmersalAnchorGroup as ImmersalAnchorGroup_9 } from "@zcomponent/immersal/lib/components/ImmersalAnchorGroup";
import { ActivateState as ActivateState_10 } from "@zcomponent/core/lib/behaviors/ActivateState";
import { LookAtNode as LookAtNode_11 } from "@zcomponent/three/lib/components/transforms/LookAtNode";
import { ShadowPlane as ShadowPlane_12 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { Box as Box_13 } from "@zcomponent/three/lib/components/meshes/Box";
import { WorldTracker as WorldTracker_14 } from "@zcomponent/zappar-three/lib/components/trackers/WorldTracker";
import { WorldTrackingUI as WorldTrackingUI_15 } from "@zcomponent/zappar-three/lib/components/WorldTrackingUI";
import { ZapparCamera as ZapparCamera_16 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { GLTF as GLTF_17 } from "@zcomponent/three/lib/components/models/GLTF";
import { CSS as CSS_18 } from "@zcomponent/html/lib/CSS";
import { Img as Img_19 } from "@zcomponent/html/lib/img";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		CameraEnvironmentMap: CameraEnvironmentMap_0 & {
			behaviors: {

			}
		},
		CameraTransform: CameraTransform_1 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_2 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_3 & {
			behaviors: {

			}
		},
		Defaults: Group_4 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_5 & {
			behaviors: {

			}
		},
		FooterContainer: Div_6 & {
			behaviors: {

			}
		},
		H2: H2_7 & {
			behaviors: {

			}
		},
		H20: H2_7 & {
			behaviors: {

			}
		},
		HTML: HTML_8 & {
			behaviors: {

			}
		},
		ImmersalAnchorGroup: ImmersalAnchorGroup_9 & {
			behaviors: {

			}
		},
		Location_1: Div_6 & {
			behaviors: {
				0: ActivateState_10,
				ActivateState: ActivateState_10,
			}
		},
		Location_10: Div_6 & {
			behaviors: {
				0: ActivateState_10,
				ActivateState: ActivateState_10,
			}
		},
		LookAtNode: LookAtNode_11 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_12 & {
			behaviors: {

			}
		},
		TargetLocation1: Box_13 & {
			behaviors: {

			}
		},
		TargetLocation10: Box_13 & {
			behaviors: {

			}
		},
		WorldTracker: WorldTracker_14 & {
			behaviors: {

			}
		},
		WorldTrackingUI: WorldTrackingUI_15 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_16 & {
			behaviors: {

			}
		},
		arrow_01_glb: GLTF_17 & {
			behaviors: {

			}
		},
		styles_css: CSS_18 & {
			behaviors: {

			}
		},
		Img: Img_19 & {
			behaviors: {

			}
		},
		Img_2: Img_19 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		Switch_Location: Layer & { clips: {
			LookAtLocation10: LayerClip;
			LookAtLocation20: LayerClip;
		}};
	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
