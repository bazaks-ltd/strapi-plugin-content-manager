import { useContentManagerEditViewDataManager } from 'strapi-helper-plugin';

function useSelect() {
  const {
    allLayoutData,
    initialData,
    isCreatingEntry,
    isSingleType,
    status,
    layout,
    hasDraftAndPublish,
    modifiedData,
    onPublish,
    onUnpublish,
    isBulkEditingEntries,
    ids,
  } = useContentManagerEditViewDataManager();

  return {
    componentLayouts: allLayoutData.components,
    initialData,
    isCreatingEntry,
    isSingleType,
    status,
    layout,
    hasDraftAndPublish,
    modifiedData,
    onPublish,
    onUnpublish,
    isBulkEditingEntries,
    ids
  };
}

export default useSelect;
