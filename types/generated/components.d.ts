import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentOneComponent extends Struct.ComponentSchema {
  collectionName: 'components_component_one_components';
  info: {
    displayName: 'Component';
    icon: 'folder';
  };
  attributes: {
    sdc: Schema.Attribute.String;
  };
}

export interface ComponentOneName extends Struct.ComponentSchema {
  collectionName: 'components_component_one_names';
  info: {
    displayName: 'Name';
    icon: 'chartBubble';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component-one.component': ComponentOneComponent;
      'component-one.name': ComponentOneName;
    }
  }
}
