import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectorMap } from "fp";
import * as ga from "actions/GovernanceActions";
import { getPeerInfo } from "actions/ControlActions";
import * as sel from "selectors";

const mapStateToProps = selectorMap({
  expandSideBar: sel.expandSideBar,
  politeiaEnabled: sel.politeiaEnabled
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      compareInventory: ga.compareInventory,
      getPeerInfo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps);
