import { Box, Stack } from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { useParams } from "react-router-dom";
import finopsCloudCostOptimization from "assets/ml/leaderbords.svg";
import Button from "components/Button";
import { useIsAllowed } from "hooks/useAllowedActions";
import { getMlSetupLeaderboards } from "urls";
import { SPACING_1, SPACING_2 } from "utils/layouts";

const SetupLeaderboardsInvitation = () => {
  const intl = useIntl();
  const { taskId } = useParams();

  const isLeaderboardSetupEnabled = useIsAllowed({ requiredActions: ["EDIT_PARTNER"] });

  return (
    <Stack alignItems="center" spacing={SPACING_1} mt={SPACING_2}>
      <img
        style={{
          width: "160px"
        }}
        src={finopsCloudCostOptimization}
        alt={intl.formatMessage({ id: "leaderboards" })}
        data-test-id="img_banner_leaderboards"
      />
      <Box>
        <FormattedMessage id="nothingToShowHereYet" />
      </Box>
      <Box>
        {isLeaderboardSetupEnabled ? (
          <Button messageId="setupLeaderboards" color="primary" variant="contained" link={getMlSetupLeaderboards(taskId)} />
        ) : (
          <FormattedMessage id="leaderboardContactManagerMessage" />
        )}
      </Box>
    </Stack>
  );
};

export default SetupLeaderboardsInvitation;
