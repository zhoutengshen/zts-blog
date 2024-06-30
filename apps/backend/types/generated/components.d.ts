import type { Schema, Attribute } from '@strapi/strapi';

export interface LogItemLogItem extends Schema.Component {
  collectionName: 'components_log_item_log_items';
  info: {
    displayName: 'logItem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'log-item.log-item': LogItemLogItem;
    }
  }
}
