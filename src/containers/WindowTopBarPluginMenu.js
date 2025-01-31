import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { withPlugins } from '../extend/withPlugins';
import { WindowTopBarPluginMenu } from '../components/WindowTopBarPluginMenu';
import { withWorkspaceContext } from '../contexts/WorkspaceContext';

/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */
const styles = theme => ({
  ctrlBtnSelected: {
    backgroundColor: theme.palette.action.selected,
  },
});

const enhance = compose(
  withTranslation(),
  withWorkspaceContext,
  withStyles(styles),
  withPlugins('WindowTopBarPluginMenu'),
);

export default enhance(WindowTopBarPluginMenu);
