/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {DataObject} from "../../../data-store";
import ConverterInterface from "../../converter-interface";

/**
 * @api
 */
export default class Display implements ConverterInterface {
    /**
     * Ensure the display none property doesn't persist to the preview
     *
     * @param value string
     * @returns {string | object}
     */
    public fromDom(value: string): string | object {
        return;
    }

    /**
     * Ensure the display none property doesn't persist to the preview
     *
     * @param name string
     * @param data Object
     * @returns {string}
     */
    public toDom(name: string, data: DataObject): string {
        return;
    }
}
