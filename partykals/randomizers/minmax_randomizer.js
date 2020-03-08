/**
 * Generate numbers between min and max.
 * Author: Ronen Ness.
 * Since: 2019.
*/
import { Randomizer } from './randomizer'
import { Utils } from '../utils'

/**
 * Min-Max number randomizer.
 */
class MinMaxRandomizer extends Randomizer {
  /**
     * Create the min-max randomizer from min and max.
     */
  constructor (min, max) {
    super()
    this.min = min
    this.max = max
  }

  /**
     * Generate a random number.
     */
  generate () {
    return Utils.getRandomBetween(this.min, this.max)
  }
}

// export the randomizer class
export { MinMaxRandomizer }
