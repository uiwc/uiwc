import { SyllabusProps } from './constants';
import { SyllabusStyled } from './styled';
import { SyllabusActivity } from './SyllabusActivity';
import { SyllabusFormativeEvaluation } from './SyllabusFormativeEvaluation';
import { SyllabusGoals } from './SyllabusGoals';
import { SyllabusLecture } from './SyllabusLecture';
import { SyllabusPisa } from './SyllabusPisa';
import {
  SyllabusPisaOpportunitiesWrapper,
  SyllabusPisaOpportunity,
} from './SyllabusPisaOpportunity';
import {
  SyllabusPisaTopic,
  SyllabusPisaTopicsWrapper,
} from './SyllabusPisaTopic';
import { SyllabusTopic } from './SyllabusTopic';
import { SyllabusVideo } from './SyllabusVideo';

export function Syllabus({
  children,
  vertical = false,
  ...rest
}: SyllabusProps) {
  return (
    <SyllabusStyled vertical={vertical} {...rest}>
      {children}
    </SyllabusStyled>
  );
}

Syllabus.Topic = SyllabusTopic;
Syllabus.Goals = SyllabusGoals;
Syllabus.Video = SyllabusVideo;
Syllabus.Lecture = SyllabusLecture;
Syllabus.Activity = SyllabusActivity;
Syllabus.FormativeEvaluation = SyllabusFormativeEvaluation;
Syllabus.Pisa = SyllabusPisa;
Syllabus.PisaTopic = SyllabusPisaTopic;
Syllabus.PisaTopicsWrapper = SyllabusPisaTopicsWrapper;
Syllabus.PisaOpportunity = SyllabusPisaOpportunity;
Syllabus.PisaOpportunitiesWrapper = SyllabusPisaOpportunitiesWrapper;
