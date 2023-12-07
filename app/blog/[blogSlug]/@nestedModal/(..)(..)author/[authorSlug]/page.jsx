import { Modal } from '../../../../../../components/modal'

export default function NestedAuthorModal({ params: { authorSlug } }) {
  return (
    <Modal>
      <h2>Nested Author Modal: /author/{authorSlug}</h2>
    </Modal>
  )
}
