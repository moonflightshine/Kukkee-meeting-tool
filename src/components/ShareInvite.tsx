import { Form } from "react-bootstrap";
import { Choice } from "../models/poll";
import CopyLink from "./CopyLink";
import InviteMail from "./InviteMail";

const ShareInvite = (props: {
  pollid: string;
  polltitle: string;
  finalChoice: Choice | undefined;
}): JSX.Element => {
  const { pollid, polltitle, finalChoice } = props;
  const pollurl = `${process.env.NEXT_PUBLIC_ORIGIN_DOMAIN}/poll/${pollid}`; /* This should be replaced */

  return (
    <div className="poll-shareinvite-content">
      <Form
        onSubmit={(e): void => {
          e.preventDefault();
        }}
      >
        <CopyLink pollurl={pollurl} final={!!finalChoice} />
        <InviteMail
          pollid={pollid}
          polltitle={polltitle}
          finalChoice={finalChoice}
        />
      </Form>
    </div>
  );
};
export default ShareInvite;
