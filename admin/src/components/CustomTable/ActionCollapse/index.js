import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import pluginId from '../../../pluginId';
import useListView from '../../../hooks/useListView';
import DeleteAll from './DeleteAll';
import Delete from './Delete';
import Wrapper from './Wrapper';
import ActionItems from './ActionItems';
import ActionItem from './ActionItem';
import EditAll from './EditAll';

function ActionCollapse({ colSpan, goTo }) {
  const { data, entriesToDelete, toggleModalDeleteAll } = useListView();
  
  const number = entriesToDelete.length;
  const suffix = number > 1 ? 'plural' : 'singular';
  const deleteMessageId = number === data.length ? 'delete' : 'deleteSelected';

  const handleEditAll = () => {
    let ids = encodeURIComponent(Buffer.from(JSON.stringify(entriesToDelete)).toString('base64'));
    goTo(`bulkedit/${ids}`)
  };

  return (
    <Wrapper colSpan={colSpan}>
      <td colSpan={colSpan}>
        <ActionItems>
          {/* Delete section */}
          <ActionItem>
            <FormattedMessage
              id={`${pluginId}.components.TableDelete.entries.${suffix}`}
              values={{ number }}
            >
              {message => <Delete>{message}</Delete>}
            </FormattedMessage>
            <FormattedMessage id={`${pluginId}.components.TableDelete.${deleteMessageId}`}>
              {message => <DeleteAll onClick={toggleModalDeleteAll}>{message}</DeleteAll>}
            </FormattedMessage>
          </ActionItem>

          {/* Edit all section */}
          <ActionItem>
          <EditAll onClick={handleEditAll}>{"Edit Selected"}</EditAll>
          </ActionItem>
        </ActionItems>
      </td>
    </Wrapper>
  );
}

ActionCollapse.propTypes = {
  colSpan: PropTypes.number.isRequired,
};

export default memo(ActionCollapse);
