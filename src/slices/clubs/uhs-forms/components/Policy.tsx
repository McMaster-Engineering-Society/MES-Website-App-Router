import PageWrapper from '@/components/form/FormPageWrapper';
import FormQuestion from '@/components/form/FormQuestion';
import PolicyQuestion from '@/components/form/PolicyAgreement';

import {
  discriminationPolicy,
  informationPolicy,
  sexualPolicy,
  studentPolicy,
} from '@/slices/clubs/uhs-forms/components/UHSPageData';
import { PolicyProps } from '@/slices/clubs/uhs-forms/types/uhsForm';

function Policy({
  informationSecurityPolicy,
  studentRightsPolicy,
  discriminationHarassmentPolicy,
  sexualViolencePolicy,
  comments,
  finalAgreement,
  updateFields,
}: PolicyProps) {
  return (
    <PageWrapper>
      <PolicyQuestion
        title='I have read the Information Security Policy below'
        policyContent={informationPolicy}
        isChecked={informationSecurityPolicy}
        onChangeHandler={(e) =>
          updateFields({ informationSecurityPolicy: e.target.checked })
        }
        htmlFor='info-security'
      />

      <PolicyQuestion
        title='I have read the Code of Student Rights and Responsibilities below'
        policyContent={studentPolicy}
        isChecked={studentRightsPolicy}
        onChangeHandler={(e) =>
          updateFields({ studentRightsPolicy: e.target.checked })
        }
        htmlFor='student-rights'
      />

      <PolicyQuestion
        title='I have read the Discrimination & Harassment Policy below'
        policyContent={discriminationPolicy}
        isChecked={discriminationHarassmentPolicy}
        onChangeHandler={(e) =>
          updateFields({ discriminationHarassmentPolicy: e.target.checked })
        }
        htmlFor='discrimination-harassment'
      />

      <PolicyQuestion
        title='I have read the Sexual Violence Policy below'
        policyContent={sexualPolicy}
        isChecked={sexualViolencePolicy}
        onChangeHandler={(e) =>
          updateFields({ sexualViolencePolicy: e.target.checked })
        }
        htmlFor='sexual-violence'
      />

      <FormQuestion title='Comments' required={false}>
        <input
          className='mt-2 w-full w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
          placeholder='Enter any comments!'
          name='comments'
          value={comments}
          onChange={(e) => updateFields({ comments: e.target.value })}
        />
      </FormQuestion>

      <PolicyQuestion
        title='I confirm that I have answered all of the questions truthfully. I acknowledge that I will be held responsible under the Code of Student Rights & Responsibilities should this event not take place as submitted.'
        isChecked={finalAgreement}
        onChangeHandler={(e) =>
          updateFields({ finalAgreement: e.target.checked })
        }
        htmlFor='final-agreement'
      />
    </PageWrapper>
  );
}

export default Policy;
