import { Maps } from '../../index';
import { BubbleSettingsModel } from '../index';
import { LayerSettings } from '../index';
/**
 * Bubble module class
 */
export declare class Bubble {
    private maps;
    /** @private */
    bubbleCollection: any[];
    /**
     * Bubble Id for current layer
     * @private
     */
    id: string;
    constructor(maps: Maps);
    /**
     * To render bubble
     *
     * @private
     */
    renderBubble(bubbleSettings: BubbleSettingsModel, shapeData: any, color: string, range: {
        min: number;
        max: number;
    }, bubbleIndex: number, dataIndex: number, layerIndex: number, layer: LayerSettings, group: Element, bubbleID?: string): void;
    private getPoints;
    /**
     * To check and trigger bubble click event
     *
     * @param {PointerEvent} e - Specifies the pointer event argument.
     * @returns {void}
     * @private
     */
    bubbleClick(e: PointerEvent): void;
    /**
     * To get bubble from target id
     *
     * @param {string} target - Specifies the target
     * @returns {object} - Returns the object
     */
    private getbubble;
    /**
     * To check and trigger bubble move event
     *
     * @param {PointerEvent} e - Specifies the pointer event argument.
     * @retruns {void}
     * @private
     */
    bubbleMove(e: PointerEvent): void;
    /**
     * Get module name.
     *
     * @returns {string} - Returns the module name.
     */
    protected getModuleName(): string;
    /**
     * To destroy the bubble.
     *
     * @returns {void}
     * @private
     */
    destroy(): void;
}
