import { Box, Progress } from '@chakra-ui/react'

export function ProgressBar({ porcentage = 90 }) {
  const getColorFromPorcentage = ({ left }) => {
    if (left <= 30) {
      return 'red'
    } else if (left > 30 && left <= 70) {
      return 'yellow'
    } else {
      return 'green'
    }
  }
  const getLeftPorcentage = () => {
    return porcentage > 100 ? 0 : 100 - porcentage
  }
  const schemaColor = getColorFromPorcentage({ left: getLeftPorcentage() })
  const borderColor = schemaColor === 'yellow' ? '#D69E2E' : schemaColor
  return (
    <>
      <Box position="relative">
        <Progress
          value={getLeftPorcentage()}
          position="absolute"
          height="10px"
          width="100%"
          top="10px"
          borderRadius="5px"
          border={`1px ${borderColor} solid`}
          colorScheme={schemaColor}
        />
      </Box>
    </>
  )
}
