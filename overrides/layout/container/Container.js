/**
 * Circumvents the framework warning: "[W] targetCls is missing.
 * This may mean that getTargetEl() is being overridden but not applyTargetCls()."
 * @class NVD3Charts.overrides.layout.container.Container
 * @overrides Ext.layout.container.Container
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
**/

Ext.define('NVD3Charts.overrides.layout.container.Container', {
  override: 'Ext.layout.container.Container',
  notifyOwner: function() {
    this.owner.afterLayout(this);
  }
});